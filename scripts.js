// Sample JavaScript for loading content dynamically
function loadContent(student) {
  let content = document.getElementById('content');
  
  if (student === 'student1') {
    content.innerHTML = `
      <h2>Algorithm 1 - Nimesh</h2>
      <p>This is a brief description of the first algorithm. The algorithm is used to perform a specific task related to community detection in social networks.</p>
      <p><strong>Introduction PDF:</strong> <a href="pdfs/algorithm1_intro.pdf" target="_blank">View PDF</a></p>
      <p><strong>Run Code:</strong></p>
      <ul>
        <li><a href="https://colab.research.google.com/1" target="_blank">Google Colab Link 1</a></li>
        <li><a href="https://colab.research.google.com/2" target="_blank">Google Colab Link 2</a></li>
        <li><a href="https://colab.research.google.com/3" target="_blank">Google Colab Link 3</a></li>
      </ul>
    `;
  } else if (student === 'student2') {
    content.innerHTML = `
      <h2>Algorithm 2 - Ravi</h2>
      <p>This is a brief description of the second algorithm, with its own specific details and functionality related to community detection.</p>
      <p><strong>Introduction PDF:</strong> <a href="pdfs/algorithm2_intro.pdf" target="_blank">View PDF</a></p>
      <p><strong>Run Code:</strong></p>
      <ul>
        <li><a href="https://colab.research.google.com/4" target="_blank">Google Colab Link 1</a></li>
        <li><a href="https://colab.research.google.com/5" target="_blank">Google Colab Link 2</a></li>
        <li><a href="https://colab.research.google.com/6" target="_blank">Google Colab Link 3</a></li>
      </ul>
    `;
  } else if (student === 'student3') {
    content.innerHTML = `
      <h2>Algorithm 3 - Priya</h2>
      <p>This algorithm tackles a specific problem in community detection. Here's how it works and how to run it.</p>
      <p><strong>Introduction PDF:</strong> <a href="pdfs/algorithm3_intro.pdf" target="_blank">View PDF</a></p>
      <p><strong>Run Code:</strong></p>
      <ul>
        <li><a href="https://colab.research.google.com/7" target="_blank">Google Colab Link 1</a></li>
        <li><a href="https://colab.research.google.com/8" target="_blank">Google Colab Link 2</a></li>
        <li><a href="https://colab.research.google.com/9" target="_blank">Google Colab Link 3</a></li>
      </ul>
    `;
  } else if (student === 'student4') {
    content.innerHTML = `
      <h2>Algorithm 4 - Ankit</h2>
      <p>This is the fourth algorithm in the community detection project. Here are the details and how to run it.</p>
      <p><strong>Introduction PDF:</strong> <a href="pdfs/algorithm4_intro.pdf" target="_blank">View PDF</a></p>
      <p><strong>Run Code:</strong></p>
      <ul>
        <li><a href="https://colab.research.google.com/10" target="_blank">Google Colab Link 1</a></li>
        <li><a href="https://colab.research.google.com/11" target="_blank">Google Colab Link 2</a></li>
        <li><a href="https://colab.research.google.com/12" target="_blank">Google Colab Link 3</a></li>
      </ul>
    `;
  } else if (student === 'student5') {
    content.innerHTML = `
      <h2>Algorithm 5 - Sana</h2>
      <p>The fifth algorithm tackles another aspect of community detection. Here are its details and how to execute it.</p>
      <p><strong>Introduction PDF:</strong> <a href="pdfs/algorithm5_intro.pdf" target="_blank">View PDF</a></p>
      <p><strong>Run Code:</strong></p>
      <ul>
        <li><a href="https://colab.research.google.com/13" target="_blank">Google Colab Link 1</a></li>
        <li><a href="https://colab.research.google.com/14" target="_blank">Google Colab Link 2</a></li>
        <li><a href="https://colab.research.google.com/15" target="_blank">Google Colab Link 3</a></li>
      </ul>
    `;
  }
}
