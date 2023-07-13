// Fetch data from data.json
fetch('data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var container = document.getElementById('jobs');
    var originalJobs = data;
    var visibleJobs = 6; // Number of jobs initially visible
    var loadMoreButton = document.querySelector('.load button');

    function displayJobs(jobs) {
      container.innerHTML = '';

      if (jobs.length > 0) {
        jobs.slice(0, visibleJobs).forEach(function(job) {
          var div = document.createElement('div');
          div.classList.add('jobitem');
          div.innerHTML = `
            <a href="job.html?id=${job.id}" class="job-link">
              <img src="${job.logo}" alt="logo" class="brand-logo" style="background: ${job.logoBackground}; padding: 5px;">
              <br>
              <span>${job.postedAt} . ${job.contract}</span>
              <h3 style="background: none;">${job.position}</h3>
              <span>${job.company}</span> <br> <br>
              <span class="loc">${job.location}</span>
            </a>
          `;
          container.appendChild(div);
        });

        if (jobs.length > visibleJobs) {
          loadMoreButton.style.display = 'block';
        } else {
          loadMoreButton.style.display = 'none';
        }
      } else {
        var noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'No matching jobs found.';
        container.appendChild(noResultsElement);
        loadMoreButton.style.display = 'none';
      }
    }

    displayJobs(originalJobs);

    loadMoreButton.addEventListener('click', function() {
      visibleJobs += 6; // Increase the number of visible jobs
      displayJobs(originalJobs);
    });
  })
  .catch(function(error) {
    console.log('Error:', error);
  });
