export async function loadConfig(file='/config.json') {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error('Failed to load configuration');
        }
        return await response.json();
    } catch (error) {
        console.log('Error loading config:', error);
        throw error;
    }
}