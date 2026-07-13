// chatbot.js

const responses = {
    "admission":
        "Admission starts from June every year. Apply online through the college website.",

    "fees":
        "The annual tuition fee for B.Sc IT is ₹45,000.",

    "courses":
        "Available courses are B.Sc IT, BCA, B.Com, BBA and MCA.",

    "hostel":
        "Yes, hostel facilities are available for both boys and girls.",

    "library":
        "The library is open from 8:00 AM to 8:00 PM.",

    "placement":
        "Top recruiters include TCS, Infosys, Wipro, Capgemini and Accenture.",

    "contact":
        "You can contact us at +91-9876543210.",

    "exit":
        "Thank you for using the College Chatbot."
};

function getResponse(question) {

    question = question.toLowerCase();

    for (let key in responses) {
        if (question.includes(key)) {
            return responses[key];
        }
    }

    return "Sorry, I don't understand your question.";
}

module.exports = { getResponse };