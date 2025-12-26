document.addEventListener('DOMContentLoaded', () => {

    // --- Professional Categories Logic ---
    const categoryListWrapper = document.querySelector('.category-list-wrapper');

    categoryListWrapper.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor tag behavior
        const clickedItem = event.target.closest('.category-item');
        if (!clickedItem) return;

        const currentActive = categoryListWrapper.querySelector('.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        clickedItem.classList.add('active');
    });

    // --- Skills Set Logic ---
    const skillsInputContainer = document.querySelector('.skills-input-container');
    const skillsInputField = skillsInputContainer.querySelector('input');
    const suggestedSkillsContainer = document.querySelector('.suggested-skills');

    const addSkill = (skillName) => {
        const skillTagHTML = `
                <span class="badge rounded-pill d-inline-flex align-items-center bg-dark-teal" data-skill="${skillName}">
                 <button type="button" class="btn-close btn-close-white me-2 remove-tag" aria-label="Remove"></button>   
                ${skillName}
                   
                </span>
            `;
        skillsInputField.insertAdjacentHTML('beforebegin', skillTagHTML);
    };

    const removeSkill = (skillTagElement) => {
        const skillName = skillTagElement.dataset.skill;
        const suggestionButton = suggestedSkillsContainer.querySelector(`.suggestion[data-skill="${skillName}"]`);
        if (suggestionButton) {
            suggestionButton.classList.remove('selected-suggestion');
        }
        skillTagElement.remove();
    };

    suggestedSkillsContainer.addEventListener('click', (event) => {
        const target = event.target.closest('.suggestion');
        if (target && !target.classList.contains('selected-suggestion')) {
            addSkill(target.dataset.skill);
            target.classList.add('selected-suggestion');
        }
    });

    skillsInputContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-tag')) {
            const skillTagElement = event.target.closest('.badge');
            if (skillTagElement) {
                removeSkill(skillTagElement);
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('cv-upload');
    const fileNameDisplay = document.getElementById('file-name');

    // Listen for changes on the file input element
    fileInput.addEventListener('change', function () {
        // Check if a file was selected
        if (fileInput.files.length > 0) {
            // Display the name of the first selected file
            fileNameDisplay.textContent = fileInput.files[0].name;
        } else {
            // If no file is selected (e.g., user cancels), revert to the placeholder text
            fileNameDisplay.textContent = 'No file chosen';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tagsContainer = document.getElementById('tags-container');
    const input = document.getElementById('other-languages-input');

    // Function to create a new tag
    function createTag(label) {
        const tag = document.createElement('div');
        tag.classList.add('tag-item');

        const closeIcon = document.createElement('i');
        closeIcon.className = 'bi bi-x tag-close-icon'; // Use Bootstrap icon classes
        // Event listener to remove tag on close button click
        closeIcon.addEventListener('click', () => {
            tag.remove();
        });

        tag.appendChild(closeIcon);
        tag.append(document.createTextNode(label));

        return tag;
    }

    // Function to add a tag
    function addTag() {
        const tagText = input.value.trim();
        if (tagText.length > 1) {
            const newTag = createTag(tagText);
            // Insert the new tag before the input field
            tagsContainer.insertBefore(newTag, input);
            input.value = ''; // Clear the input
        }
    }

    // Listen for 'Enter' key press
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
            addTag();
        }
    });

    // Make the whole wrapper focus the input on click
    tagsContainer.addEventListener('click', () => {
        input.focus();
    });

    // Initial setup to make existing close buttons functional
    tagsContainer.querySelectorAll('.tag-close-icon').forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
        });
    });

});
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.skill-slider');

  const levelMap = [
    { value: 40, label: 'Neutral Level' },
    { value: 85, label: 'High' },
    { value: 100, label: 'Very High' }
  ];

  function updateSlider(slider) {
    const value = parseInt(slider.value, 10);
    const labelId = slider.dataset.labelId;
    const labelElement = document.getElementById(labelId);

    // Update the label text
    let currentLabel = 'Low'; // default
    for (const level of levelMap) {
      if (value <= level.value) {
        currentLabel = level.label;
        break;
      }
    }
    labelElement.textContent = currentLabel;

    // Update the CSS variable for the track background
    const valuePercent = (value / (slider.max - slider.min)) * 100;
    slider.style.setProperty('--value-percent', `${valuePercent}%`);
  }

  sliders.forEach(slider => {
    // Set initial state
    updateSlider(slider);

    // Add event listener
    slider.addEventListener('input', () => {
      updateSlider(slider);
    });
  });
});