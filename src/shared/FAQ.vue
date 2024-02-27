<!-- FAQ.vue -->
<template>
    <!-- Your template content for FAQ.vue goes here -->
    <div class="faq-container">
        <h1>Frequently Asked Questions</h1>
        <!-- Add your FAQ items here -->
        <div v-for="(faq, index) in faqList" :key="index" class="faq-item">
            <h2>{{ faq.question }}</h2>
            <p>{{ faq.answer }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            faqList: [
                {
                    question: 'What is FAQ?',
                    answer: 'FAQ stands for Frequently Asked Questions. It is a list of common questions and answers.'
                },
                {
                    question: 'Why use FAQs?',
                    answer: 'FAQs help users find quick answers to common queries, reducing the need for customer support.'
                },
                // Add more FAQ items as needed
            ]
        };
    }
};
</script>
  
<style scoped>
/* Add your component-specific styles for FAQ.vue here */

.faq-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.faq-item {
    margin-bottom: 20px;
}

h1 {
    font-size: 2rem;
    margin-bottom: 20px;
}

h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
}

p {
    font-size: 1rem;
    color: #333;
}
</style>
  