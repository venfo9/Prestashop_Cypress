class ErrorHandler {
    MathCalculateIsNotDefined() {
        cy.on('uncaught:exception', (err, runnable) => {
            // Check that the error related to a JS element with invalid parameters
            if (err.message.includes('MathCalculate is not defined')) {
                // Ignore the error and continue test
                return false;
            }
            // Otherwise, return true to handle other errors.
            return true;
        });
    }
}
export default ErrorHandler