export async function loadConfig(file='config.json') {
    try {
        const response = await fetch(file);
        // console.log(await fetch(file));

        return await response.json();
    } catch (error) {
        console.log('Error loading config:', error);
        throw error;
    }
}

export const config = await loadConfig();