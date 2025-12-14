export default {
    // Keep user state outside of the async function
    user: { authenticated: false }, 
    
    async authenticated() {
    try {
        const token = localStorage.getItem('token'); // get token 

        const response = await fetch("http://localhost:3000/api/authenticate", {
            method: 'GET',
            headers: {
                // include the token in the header
                'Authorization': `Bearer ${token}` 
            }
        });

        if (response.status === 401) {
            return false; 
        }

        // 200 response means authenticated
        if (response.ok) {
            const data = await response.json(); 
            return data.authenticated;
        }

    } catch (e) {
        console.error("Authentication check error:", e);
        return false;
    }
}
}