fetch('data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var container = document.getElementById('jobs');

    data.forEach(function(item) {
      var div = document.createElement('div');
      var link = document.createElement('a');
      link.classList.add('job-link');
      link.href = 'job.html?id=' + item.id;
      div.classList.add('jobitem');
      div.innerHTML = `
        <a href="job.html?id=${item.id}" class="job-link">
          <img src="${item.logo}" alt="logo" class="brand-logo" style="background: ${item.logoBackground}; padding: 5px;">
          <br>
          <span>${item.postedAt} . ${item.contract}</span>
          <h3 style="background: none;">${item.position}</h3>
          <span>${item.company}</span> <br> <br>
          <span class="loc">${item.location}</span>
        </a>
      `;
      container.appendChild(div);
    });

    // Filter jobs by name
    var nameFilterInput = document.getElementById('name-filter');
    nameFilterInput.addEventListener('input', function() {
      var nameFilter = nameFilterInput.value.trim().toLowerCase();
      var filteredJobs = data.filter(function(job) {
        var jobName = job.position.toLowerCase();
        return jobName.includes(nameFilter);
      });
      displayJobs(filteredJobs);
    });

    // Display the filtered jobs in the results container
    function displayJobs(jobs) {
      container.innerHTML = '';

      if (jobs.length > 0) {
        jobs.forEach(function(job) {
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
      } else {
        var noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'No matching jobs found.';
        container.appendChild(noResultsElement);
      }
    }
  })
  .catch(function(error) {
    console.log('Error:', error);
  });
