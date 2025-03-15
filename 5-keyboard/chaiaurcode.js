const insert = document.getElementById('insert');

//writing e.key would have been sufficient but this is to ensure if I press space bar, "space" in printer instead of a blank
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>       
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>    
    </tr>
    
  </table>
    </div>
  `;
});
