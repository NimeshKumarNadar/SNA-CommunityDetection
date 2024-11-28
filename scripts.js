function loadContent(studentId) {
  const content = {
    student1: `
      <h2>Algorithm 1 - Student 1</h2>
      <p><strong>Introduction:</strong> This algorithm focuses on [brief description].</p>
      <p><a href="pdfs/algorithm1.pdf" target="_blank" style="color: #0073e6; text-decoration: underline;">View PDF</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook1" target="_blank" style="color: #0073e6; text-decoration: underline;">Run on Google Colab - Example 1</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook2" target="_blank" style="color: #0073e6; text-decoration: underline;">Run on Google Colab - Example 2</a></p>
    `,
    student2: `
      <h2>Algorithm 2 - Student 2</h2>
      <p><strong>Introduction:</strong> This algorithm solves [brief description].</p>
      <p><a href="pdfs/algorithm2.pdf" target="_blank" style="color: #0073e6; text-decoration: underline;">View PDF</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook3" target="_blank" style="color: #0073e6; text-decoration: underline;">Run on Google Colab - Example 1</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook4" target="_blank" style="color: #0073e6; text-decoration: underline;">Run on Google Colab - Example 2</a></p>
    `,
    student3: `
      <h2>Algorithm 3 - Student 3</h2>
      <p><strong>Introduction:</strong> This algorithm improves [brief description].</p>
      <p><a href="pdfs/algorithm3.pdf" target="_blank" style="color: #0073e6; text-decoration: underline;">View PDF</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook5" target="_blank" style="color: #0073e6; text-decoration: underline;">Run on Google Colab - Example 1</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook6" target="_blank" style="color: #0073e6; text-decoration: underline;">Run on Google Colab - Example 2</a></p>
    `,
    student4: `
      <h2>Algorithm 4 - Student 4</h2>
      <p><strong>Introduction:</strong> This algorithm demonstrates [brief description].</p>
      <p><a href="pdfs/algorithm4.pdf" target="_blank" style="color: #0073e6; text-decoration: underline;">View PDF</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook7" target="_blank" style="color: #0073e6; text-decoration: underline;">Run on Google Colab - Example 1</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook8" target="_blank" style="color: #0073e6; text-decoration: underline;">Run on Google Colab - Example 2</a></p>
    `,
    student5: `
      <h2>Algorithm 5 - Student 5</h2>
      <p><strong>Introduction:</strong> This algorithm analyzes [brief description].</p>
      <p><a href="pdfs/algorithm5.pdf" target="_blank" style="color: #0073e6; text-decoration: underline;">View PDF</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook9" target="_blank" style="color: #0073e6; text-decoration: underline;">Run on Google Colab - Example 1</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook10" target="_blank" style="color: #0073e6; text-decoration: underline;">Run on Google Colab - Example 2</a></p>
    `,
  };

  // Load the selected student's content or show an error if not found
  document.getElementById('content').innerHTML = content[studentId] || `
    <h2>Not Found</h2>
    <p>The requested content is not available.</p>
  `;
}