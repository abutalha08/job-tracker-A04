let interviewList = [];
let rejectedList = [];
// 1
let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allJobCardSection = document.getElementById('allJobCards');
const filterSection = document.getElementById('FilteredSection');

//3 For Event delegation er
const availableJobContainer = document.querySelector('#availableJob');
console.log(availableJobContainer);

// 2 All counts 
function calculateCount(){
    totalCount.innerText = allJobCardSection.children.length;
    interviewCount.innerText = interviewList.length;  
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();


//4
const filterContainer = document.getElementById('filterButton');
const filterButtons = filterContainer.querySelectorAll('button');

  for(let btn of filterButtons){
    btn.addEventListener('click',function(){
        for(let b of filterButtons){

            b.classList.remove('bg-primary', 'text-white');
        b.classList.add('btn-outline');

        }
          btn.classList.add('bg-primary', 'text-white');
      btn.classList.remove('btn-outline');
    })
  }


//   filterButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       // প্রথমে সব button থেকে active/remove করা class সরানো
//       filterButtons.forEach(b => {
//         b.classList.remove('bg-primary', 'text-white');
//         b.classList.add('btn-outline/10');
//       });

//       // click করা button কে active করা
//       btn.classList.add('bg-primary', 'text-white');
//       btn.classList.remove('btn-outline/10');
//     });
//   });


//5 
 availableJobContainer.addEventListener('click',function(event){
    const companyName = document.querySelector('.companyName').innerText;
    const positionName = document.querySelector('.positionName').innerText;
    const locationTypeSalary = document.querySelector('.locationTypeSalary').innerText;
    const statusBtn = document.querySelector('.statusBtn').innerText;
    const statusDescription = document.querySelector('.statusDescription').innerText;

    const cardInfo = {
        companyName,
        positionName,
        locationTypeSalary,
        statusBtn,
        statusDescription
    }

    // console.log(cardInfo);

    const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName);

    if(!jobExist){
        interviewList.push(cardInfo);
    }

    console.log(interviewList);
    

})