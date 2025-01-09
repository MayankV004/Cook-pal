import React from 'react';

function Help() {
  return (
    <>
      <div className="md:max-w-full mx-auto p-6 mt-10 border-t border-[#509E2F] ">
        <h1 className="text-[#509E2F] text-3xl font-bold mb-4">Help Page - Cookpal Recipe App</h1>
        <p className="mb-6">
          Welcome to the <strong>Cookpal Help Page</strong>! Here, you'll find answers to common questions and tips on how to make the most of the Cookpal Recipe App.
        </p>

        <hr className="my-6" />

        <section>
          <h2 className="text-[#509E2F] text-2xl font-semibold mb-4">Getting Started</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Create an Account</strong>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Sign up using your email address and set a secure password.</li>
                <li>If you already have an account, log in to access your personalized dashboard.</li>
              </ul>
            </li>
            <li>
              <strong>Search for Recipes</strong>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Use the search bar to find recipes by name, ingredients, or cuisine.</li>
                <li>Apply filters like preparation time, difficulty level, or dietary preferences.</li>
              </ul>
            </li>
            <li>
              <strong>Explore Categories</strong>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Browse through curated categories such as Breakfast, Quick & Easy, Comfort Foods, and more.</li>
              </ul>
            </li>
          </ol>
        </section>

        <hr className="my-6" />

        <section>
          <h2 className="text-[#509E2F] text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Save Your Favorites</strong> - Click the heart icon on any recipe to save it to your Favorites for easy access later.</li>
            <li><strong>Step-by-Step Instructions</strong> - Follow detailed cooking instructions with images for each step to ensure perfect results every time.</li>
            <li><strong>Personalized Recommendations</strong> - Get recipe suggestions based on your preferences and saved favorites.</li>
            <li><strong>Nutritional Information</strong> - Check calorie counts and other nutritional details for each recipe.</li>
          </ul>
        </section>

        <hr className="my-6" />

        <section>
          <h2 className="text-[#509E2F] text-2xl font-semibold mb-4">Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">How do I edit my profile information?</h3>
              <p>Navigate to the "Profile" section in the app. Update your name, email, or preferences and save changes.</p>
            </div>
            <div>
              <h3 className="font-bold">Can I submit my own recipes?</h3>
              <p>Yes! Go to the "Submit Recipe" section, fill out the form, and upload images of your dish.</p>
            </div>
            <div>
              <h3 className="font-bold">How do I share a recipe?</h3>
              <p>Click the "Share" button on the recipe page to send it via email, or share it on social media platforms.</p>
            </div>
            <div>
              <h3 className="font-bold">What should I do if I forget my password?</h3>
              <p>Click "Forgot Password" on the login page. Follow the instructions sent to your registered email to reset your password.</p>
            </div>
          </div>
        </section>

        <hr className="my-6" />

        <section>
          <h2 className="text-[#509E2F] text-2xl font-semibold mb-4">Troubleshooting</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>App Crashes or Freezes</strong> - Ensure your app is updated to the latest version. Restart the app or your device if the issue persists.</li>
            <li><strong>Recipe Not Loading</strong> - Check your internet connection. Try reloading the page or clearing the app cache.</li>
            <li><strong>Account Issues</strong> - Contact support at <a href="mailto:support@cookpal.com" className="text-blue-500 underline">support@cookpal.com</a> for account-related help.</li>
          </ul>
        </section>

        <hr className="my-6" />

        <section>
          <h2 className="text-[#509E2F] text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Still need help? Reach out to us:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Email</strong>: <a href="mailto:support@cookpal.com" className="text-blue-500 underline">support@cookpal.com</a></li>
            <li><strong>Phone</strong>: +1 (800) 123-4567</li>
            <li><strong>Live Chat</strong>: Available on our website from 9 AM to 6 PM (EST)</li>
          </ul>
        </section>

        <hr className="my-6" />

        <p className="text-center text-gray-600">Thank you for choosing <strong>Cookpal</strong>! We’re here to make your cooking journey fun and hassle-free.</p>
      </div>
    </>
  );
}

export default Help;
