document.addEventListener('DOMContentLoaded', () => {
  const queryInput = document.getElementById('query-input');
  const dropdownOptions = document.getElementById('dropdown-options');
  const newInputContainer = document.getElementById('newInputContainer');

  const options = {
      '': ['Project', 'Media', 'Career'],
      'Project': ['Project1', 'Project2'],
      'Media': ['Media1', 'Media2'],
      'Career': ['Career1', 'Career2']
  };

  let currentOptions = [];
  let inputFields = [];

  function toggleDropdown() {
      dropdownOptions.style.display = dropdownOptions.style.display === 'block' ? 'none' : 'block';
      populateOptions();
  }

  function populateOptions() {
      dropdownOptions.innerHTML = '';
      currentOptions.forEach(option => {
          const div = document.createElement('div');
          div.textContent = option;
          div.onclick = () => handleOptionClick(option);
          dropdownOptions.appendChild(div);
      });
  }

  function handleOptionClick(option) {
      if (inputFields.length > 0) {
          for (let input of inputFields) {
              if (input.value === '') {
                  input.value = option;
                  return;
              }
          }
      }
      queryInput.value = queryInput.value==""?option:queryInput.value;
      currentOptions = options[option] || [];
      populateOptions();
      dropdownOptions.style.display = 'none';

      if (currentOptions.length > 0) {
          const newInput = document.createElement('input');
          newInput.type = 'text';
          newInput.readOnly = true;
          newInput.placeholder = 'Select an option';
          newInput.onclick = toggleDropdown;
          newInputContainer.appendChild(newInput);
          inputFields.push(newInput);
      }
  }
  currentOptions = options[queryInput.value];
  populateOptions();

  queryInput.addEventListener('click', toggleDropdown);
});
