// Function to load student content
function loadContent(student) {
  let content = document.getElementById('content');
  
  // Algorithm 1 - Nimesh
  if (student === 'student1') {
    content.innerHTML = `
      <h2>Clique Percolation Method</h2>
      <p><strong>Details:</strong> <a href="pdfs/CPM.pdf" target="_blank">Click here for details</a></p>
      <p><strong>Run Code:</strong></p>
      <ul>
        <li><a href="https://colab.research.google.com/drive/12kux0OuH2EngjzgugyPjIJlHoa61yIsF?usp=sharing" target="_blank">Google Colab Link</a></li>
        </ul>
    `;
  }
  // Algorithm 2 - Ravi
  else if (student === 'student2') {
    content.innerHTML = `
      <h2>Girvan Newman Algorithm</h2>
      <p><strong>Details:</strong> <a href="pdfs/Girvan.pdf" target="_blank">Click here for details</a></p>
      <p><strong>Run Code:</strong></p>
      <ul>
        <li><a href="https://colab.research.google.com/drive/1LhDfiEU7H-udBc-qMkalnAp--niJKxTW?usp=sharing" target="_blank">Google Colab Link</a></li>
        </ul>
    `;
  }
  // Algorithm 3 - Priya
  else if (student === 'student3') {
    content.innerHTML = `
      <h2>Louvain Method</h2>
      <p><strong>Details:</strong> <a href="pdfs/Louvain Method.pdf" target="_blank">Click here for details</a></p>
      <p><strong>Run Code:</strong></p>
      <ul>
        <li><a href="https://colab.research.google.com/drive/11i-9yuaIgG4iwxZyj2ixTZ4a0pMB3io1?usp=sharing" target="_blank">Google Colab Link 1</a></li>
<li><a href="https://colab.research.google.com/drive/16m6UBkSlgjF1ec1bu5JYfzX0GoHoWwP2?usp=sharing" target="_blank">Google Colab Link 2</a></li>
        </ul>
    `;
  }
  // Algorithm 4 - Ankit
  else if (student === 'student4') {
    content.innerHTML = `
      <h2>Label Propagation Algorithm</h2>
      <p><strong>Details:</strong> <a href="pdfs/LabelPropagationAlgo.pdf" target="_blank">Click here for details</a></p>
      <p><strong>Run Code:</strong></p>
      <ul>
        <li><a href="https://colab.research.google.com/drive/1GLX3Z656q--Z9qOp4G2U75lrnbpWdH7X?usp=sharing" target="_blank">Google Colab Link 1</a></li>
<li><a href="https://colab.research.google.com/drive/1eJXclGpIU6Ftrs2ofizNN7SDr12MkPfA?usp=sharing" target="_blank">Google Colab Link 2</a></li>
        </ul>
    `;
  }
  // Algorithm 5 - Sana
  else if (student === 'student5') {
    content.innerHTML = `
      <h2>Walktrap Algorithm</h2>
      <p><strong>Details and Code:</strong> <a href="https://walktrap-algorithm-gui-pfkno7npcg2ju9uj7np4hc.streamlit.app/" target="_blank">Click here</a></p>
      
    `;
  }
}

// Function to load group member details in the main content area
function loadGroupMembers() {
  let content = document.getElementById('content');
  content.innerHTML = `
    <h2>Group Members and Algorithms</h2>
    <ul class="group-members">
      <li><strong>205123059 Nimesh Kumar Nadar</strong> - Clique Percolation Method</li>
      <li><strong>205123057 Neha Pandey</strong> - Label Propagation Algorithm</li>
      <li><strong>205123055 Mansi Sahu</strong> - Walktrap Algorithm</li>
      <li><strong>205123053 Manish Sutar</strong> - Louvain Method</li>
      <li><strong>205123051 Manish Chaudhary</strong> - Girvan Newman Algorithm</li>
    </ul>
  `;
}
