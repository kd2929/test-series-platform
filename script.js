async function loadTestFromGitHub(testId) {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/kd2929/test-series-platform/data/tests/${testId}.json`);
        const testData = await response.json();
        console.log(testData);
        showTest(testData);
    } catch (error) {
        console.error('Error loading test:', error);
        alert('Test load failed!');
    }
}
