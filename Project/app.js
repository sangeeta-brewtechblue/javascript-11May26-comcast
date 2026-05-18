// Base URL for JSONPlaceholder API
const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// DOM Elements
const userForm = document.getElementById('userForm');
const userIdInput = document.getElementById('userId');
const userNameInput = document.getElementById('userName');
const userEmailInput = document.getElementById('userEmail');
const submitBtn = document.getElementById('submitBtn');
const userList = document.getElementById('userList');

// Global state to mimic local updates since JSONPlaceholder doesn't persist changes
let localUsers = [];

// ==========================================
// 1. READ: Fetch and Display Users
// ==========================================
const fetchUsers = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('Failed to fetch users');
        
        // Fetch only first 5 users for a cleaner UI demo
        const data = await response.json();
        localUsers = data.slice(0, 5); 
        
        renderUsers();
    } catch (error) {
        userList.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
};

const renderUsers = () => {
    if (localUsers.length === 0) {
        userList.innerHTML = '<p>No users found.</p>';
        return;
    }

    // Using ES6 Template Literals and Array.map()
    userList.innerHTML = localUsers.map(({ id, name, email }) => `
        <div class="user-card" id="user-${id}">
            <div>
                <strong>${name}</strong> <br>
                <small>${email}</small>
            </div>
            <div class="actions">
                <button class="edit-btn" onclick="prepareUpdate(${id})">Edit</button>
                <button onclick="deleteUser(${id})">Delete</button>
            </div>
        </div>
    `).join('');
};

// ==========================================
// 2. CREATE & UPDATE: Handle Form Submit
// ==========================================
userForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = userIdInput.value;
    const userData = {
        name: userNameInput.value,
        email: userEmailInput.value
    };

    if (id) {
        // If ID exists, we are updating
        await updateUser(id, userData);
    } else {
        // If no ID, we are creating
        await createUser(userData);
    }

    userForm.reset();
    userIdInput.value = '';
    submitBtn.textContent = 'Add User';
});

// CREATE implementation
const createUser = async (userData) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });
        
        const newUser = await response.json();
        
        // JSONPlaceholder always returns id: 11 for new items. 
        // We override it with a timestamp so our UI can manage multiple new items properly.
        newUser.id = Date.now(); 
        
        localUsers.unshift(newUser); // Add to the top of the local array
        renderUsers();
        alert('User Created Successfully (Simulated)!');
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

// ==========================================
// 3. UPDATE: Populate Form & PUT Request
// ==========================================
const prepareUpdate = (id) => {
    // Find user using ES6 Array.find()
    const user = localUsers.find(u => u.id === id);
    if (!user) return;

    // Populate form fields
    userIdInput.value = user.id;
    userNameInput.value = user.name;
    userEmailInput.value = user.email;
    submitBtn.textContent = 'Update User';
};

const updateUser = async (id, userData) => {
    try {
        // JSONPlaceholder will fail a real PUT on custom IDs we created locally (like Date.now()).
        // So we gracefully fall back if it's a simulated local ID.
        if (id < 11) {
            await fetch(`${BASE_URL}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(userData),
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            });
        }

        // Update our local state array
        localUsers = localUsers.map(user => 
            user.id == id ? { ...user, ...userData } : user
        );
        
        renderUsers();
        alert('User Updated Successfully!');
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

// ==========================================
// 4. DELETE: Remove User
// ==========================================
const deleteUser = async (id) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
        if (id < 11) {
            await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
        }

        // Filter out the deleted user using ES6 Array.filter()
        localUsers = localUsers.filter(user => user.id !== id);
        renderUsers();
        alert('User Deleted Successfully!');
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

// Initial Fetch on load
fetchUsers();