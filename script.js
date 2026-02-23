
let interviewList = [];
let rejectedList = [];

// 1.
let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allJobCardSection = document.getElementById('allJobCards');
const filterSection = document.getElementById('FilteredSection');

// 3. Event delegation er jonno
const availableJobContainer = document.querySelector('#availableJob');

// 2. Function 
function calculateCount() {
  totalCount.innerText = allJobCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();

// 4. Filter buttons toggling
const filterContainer = document.getElementById('filterButton');
const filterButtons = filterContainer.querySelectorAll('button');

for (let btn of filterButtons) {
  btn.addEventListener('click', function () {
    for (let b of filterButtons) {
      b.classList.remove('bg-primary', 'text-white');
      b.classList.add('btn-outline');
    }
    btn.classList.add('bg-primary', 'text-white');
    btn.classList.remove('btn-outline');

    // Filter section toggle
    if (btn.id === 'allFilterBtn') {
      filterSection.classList.add('hidden');
      allJobCardSection.classList.remove('hidden');
    } else {
      filterSection.classList.remove('hidden');
      allJobCardSection.classList.add('hidden');

     if (btn.id === 'interviewFilterBtn') {
  renderList(interviewList, 'interview');
} 
else if (btn.id === 'rejectedFilterBtn') {
  renderList(rejectedList, 'rejected');
}
    }
  });
}

// 5.Event delegation for interview/rejected buttons
document.addEventListener('click', function (event) {

  const target = event.target;

  if (target.classList.contains('interviewBtn') || target.classList.contains('rejectedBtn')) {

    const parentDiv = target.closest('.jobCard');
    const companyName = parentDiv.querySelector('.companyName').innerText;
    const positionName = parentDiv.querySelector('.positionName').innerText;
    const locationText = parentDiv.querySelector('.statusDescription').innerText;

    const locationTypeSalary = parentDiv.querySelector('.locationTypeSalary')
      ? Array.from(parentDiv.querySelectorAll('.locationTypeSalary li'))
          .map(li => li.innerText)
          .join(' | ')
      : '';

      //Create a object
    const cardInfo = {
      companyName,
      positionName,
      locationTypeSalary,
      statusDescription: locationText
    };


    //Interview Button Click
    if (target.classList.contains('interviewBtn')) {

      // Remove from rejected
      rejectedList = rejectedList.filter(item => item.companyName !== companyName);

      // interview te add korsi jodi na thake
      if (!interviewList.find(item => item.companyName === companyName)) {
        interviewList.push(cardInfo);
      }

      parentDiv.querySelector('.statusBtn').innerText = 'Interview';
    }

    //Rejected Button Click
    else if (target.classList.contains('rejectedBtn')) {

      // Remove from interview
      interviewList = interviewList.filter(item => item.companyName !== companyName);

      // Add to rejected jodi na thake
      if (!rejectedList.find(item => item.companyName === companyName)) {
        rejectedList.push(cardInfo);
      }

      parentDiv.querySelector('.statusBtn').innerText = 'Rejected';
    }

    calculateCount();

    if (!filterSection.classList.contains('hidden')) {
      const activeBtn = document.querySelector('#filterButton .bg-primary');

      if (activeBtn.id === 'interviewFilterBtn') {
        renderList(interviewList, 'interview');
      } 
      else if (activeBtn.id === 'rejectedFilterBtn') {
        renderList(rejectedList, 'rejected');
      }
    }
  }

  //For Delete Button
  if (target.closest('.deleteBtn')) {
    const card = target.closest('.jobCard');

    if (allJobCardSection.contains(card)) {
      const companyName = card.querySelector('.companyName').innerText;

      card.remove();

      interviewList = interviewList.filter(item => item.companyName !== companyName);
      rejectedList = rejectedList.filter(item => item.companyName !== companyName);

      calculateCount();
    }
  }
});

// render filtered list

function renderList(list, type = '') {
  filterSection.innerHTML = '';

//     // Update the job count dynamically
//   const jobCountSpan = document.getElementById('jobCount');
//   jobCountSpan.innerText = `${list.length} of ${allJobCardSection.children.length}`;


  if (list.length === 0) {
    filterSection.innerHTML = `
      <div class="flex flex-col items-center justify-center text-center py-16 space-y-4">
        <img src="./images/jobs.png" alt="No Jobs" class="w-32 h-32 object-contain">
        <h2 class="text-xl font-semibold text-[#002C5C]">No jobs available</h2>
        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
      </div>
    `;
    return;
  }

  // list e item thakle
  for (let item of list) {
    const div = document.createElement('div');
    div.className = 'jobCard p-6 rounded-lg bg-[#F1F2F4] flex justify-between';
    div.innerHTML = `
      <div class="space-y-4">
        <div>
          <h3 class="font-semibold text-[18px] text-[#002C5C] companyName">${item.companyName}</h3>
          <p class="font-normal text-[16px] text-[#64748B] positionName">${item.positionName}</p>
        </div>
        <div>
          <p class="font-normal text-[#64748B] text-[14px]">${item.locationTypeSalary}</p>
        </div>
        <div>
          <button class="btn bg-primary-content text-[#002C5C] mb-4 statusBtn">
            ${type === 'interview' ? 'Interview' : 'Rejected'}
          </button>
          <p class="font-normal text-[14px] text-[#323B49] statusDescription">${item.statusDescription}</p>
        </div>
        <div class="flex gap-3">
          <button class="btn btn-outline btn-success interviewBtn">Interview</button>
          <button class="btn btn-outline btn-error rejectedBtn">Rejected</button>
        </div>
      </div>
    `;
    filterSection.appendChild(div);
  }
}