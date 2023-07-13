const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get('id');

fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //find job with matching id
        const job = data.find(function(item){
            return item.id === parseInt(jobId);
        })

        if (job) {
            // display job details
            var jobDetailsElement = document.getElementById('jobDetails');
            jobDetailsElement.innerHTML = `
            <div class="logo2" style="background: ${job.logoBackground};">
                <img src=${job.logo} alt="logo" srcset="" style="background: none;">
            </div>
            <div class="company-name" style="padding-left: 40px;">
                 <div class="side2">
                    <h4 style="color: #000; padding-bottom: 0;">${job.company}</h4>
                    <span style="color: #000; padding-bottom: 0;">${job.contract}</span> 
                </div>
                <div class="side22" style="padding-top: 40px;">
                    <button style="border: none; background: grey; padding-top: 10px; padding-bottom: 10px;">
                    <a style="text-decoration: none; background: none;" href="${job.website}" >Company Site</button>
                </div>
            </div>
            `

            var jobRequirementElement = document.getElementById('jobRequirement');
            jobRequirementElement.innerHTML = `
            <div style="background: none;">
                <div style="background: none;">
                    <span style="background: none; color: #9DAEC2">${job.postedAt} . ${job.contract}</span>
                    <h3 style="background: none; color: #9DAEC2">${job.position}</h3>
                    <span style="background: none; color: #9DAEC2">${job.location}</span>
                </div>
                <div style="background: none;">
                    <p style="background: none; color: #9DAEC2">${job.description}</p>
                    <h4 style="background: none;">Requirements</h4>
                    <p style="background: none; color: #9DAEC2">${job.requirements.content}</p>
                    <ul style="background: none;">
                        <li style="background: none; color: #9DAEC2">${job.requirements.items[0]}</li>
                        <li style="background: none; color: #9DAEC2">${job.requirements.items[1]}</li>
                        <li style="background: none; color: #9DAEC2">${job.requirements.items[2]}</li>
                        <li style="background: none; color: #9DAEC2">${job.requirements.items[3]}</li>
                    </ul>
                    <h4 style="background: none;">What You Will Do</h4>
                    <p style="background: none; color: #9DAEC2">${job.role.content}</p>
                    <ol style="background: none; color: #9DAEC2">
                        <li style="background: none; color: #9DAEC2">${job.role.items[0]}</li>
                        <li style="background: none; color: #9DAEC2">${job.role.items[1]}</li>
                        <li style="background: none; color: #9DAEC2">${job.role.items[2]}</li>
                        <li style="background: none; color: #9DAEC2">${job.role.items[3]}</li>
                    </0l>
                </div>
            </div>
            `

            var footerElement = document.getElementById('footer');
            footerElement.innerHTML = `
                <span>${job.position}</span> <br>
                <span>${job.company}</span>
                <div class="apply-button">
                <button><a href="${job.apply}">Apply</a></button>
                </div>
            `
        }
    })