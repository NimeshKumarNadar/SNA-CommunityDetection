function loadContent(studentId) {
  const content = {
    student1: `
      <h2>Algorithm 1 - Student 1</h2>
      <p><a href="path_to_pdf1.pdf" target="_blank">View PDF</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook1" target="_blank">Run on Google Colab - Example 1</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook2" target="_blank">Run on Google Colab - Example 2</a></p>
    `,
    student2: `
      <h2>Algorithm 2 - Student 2</h2>
      <p><a href="path_to_pdf2.pdf" target="_blank">View PDF</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook3" target="_blank">Run on Google Colab - Example 1</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook4" target="_blank">Run on Google Colab - Example 2</a></p>
    `,
    student3: `
      <h2>Algorithm 3 - Student 3</h2>
      <p><a href="path_to_pdf3.pdf" target="_blank">View PDF</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook3" target="_blank">Run on Google Colab - Example 1</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook4" target="_blank">Run on Google Colab - Example 2</a></p>
    `
,
    student4: `
      <h2>Algorithm 4 - Student 4</h2>
      <p><a href="path_to_pdf2.pdf" target="_blank">View PDF</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook3" target="_blank">Run on Google Colab - Example 1</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook4" target="_blank">Run on Google Colab - Example 2</a></p>
    `,
    student5: `
      <h2>Algorithm 5 - Student 5</h2>
      <p><a href="path_to_pdf2.pdf" target="_blank">View PDF</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook3" target="_blank">Run on Google Colab - Example 1</a></p>
      <p><a href="https://colab.research.google.com/path_to_notebook4" target="_blank">Run on Google Colab - Example 2</a></p>
    `
    // Repeat for other students...
  };

  document.getElementById('content').innerHTML = content[studentId] || `
    <h2>Not Found</h2>
    <p>The requested content is not available.</p>
  `;
}