var text = document.querySelector("#intext"); //수입력칸
var start = document.querySelector("#start"); // 시작버튼
var show = document.querySelector("#show"); // 스트라이크와 볼 보여주는 칸
var couS = document.querySelector("#cou"); // 남은횟수 보여주는 칸
var res = document.querySelector("#restart") // 다시시작 버튼
var setNumber = [0,1,2,3,4,5,6,7,8,9]; // 랜덤으로 정할수 있는 수를 배열로 정함
var selectSetNumber = []; // 랜덤의 수가 들어갈수 있는 빈배열 생성
var st  = 0; // 스트라이크 횟수
var ba = 0; // 볼 횟수
var cou = 9; // 남은 횟수 카운팅 변수

start.addEventListener("click", function(){ // 시작버튼을 눌렀을때 함수
    start.style.display = "none"; // 시작버튼 사라짐
    text.style.display = "block"; // 텍스트 입력칸 출력
    show.style.display = "block"; // 볼, 스트라이크 나타내는 칸 출력
    couS.style.display = "block"; // 남은횟수 칸 출력
    setN(); 
});

text.addEventListener("keypress", function(key){ // 키보드의 키가 눌렸을때 함수 실행
    if(key.keyCode === 13){ // 만약 키보드의 13 (13= 엔터키)가 눌렸다면 
        if (text.value.length === 3){ // 또한 텍스트 값의 자리수가 3칸 이상이면 
        homerun()
        text.value =""; //텍스트칸 지움
        st=0; // 스트라이크 갯수 초기화
        ba=0;// 볼횟수 초기화 
        cou--; // 남은기회 빼주기
        }
        else{ // 키보드의 엔터기가 눌렸지만 텍스트의 값이 3칸이 아니면 알람 발생 
            alert("3자리수를 입력해주세요"); 
            text.value ="";
        }
        if(cou === -1){ // 만약 카운트가 -1 이되면 텍스트 입력칸 지우고 다시시작 버튼 생성
            text.style.display = "none";
            res.style.display = "block";
        }
    }
        });
    
function setN(){ // 랜덤의 3개의 수 생성하는 함수
    for(let i = 0; i<3; i++){ //3번 반복
      var thNum = setNumber.splice(Math.floor(Math.random()*(10-i)),1)[0]; 
      // math겍채를 사용하여 random()*(10-i) 해주어 원하는 범위를 정해주고 floor 정수를 출력하고 ,1로 정해진 수의 자리의 배열을 빼주고 thNum 변수에 저장
      // [0]은 선택된 배열의 첫번째의 수 를 가져온다. 이것을 사용하지않으면 배열자체를 가지고 오기때문에 배열안에 배열이 들어간다. 
      selectSetNumber.push(thNum);      // 저장된 변수의 값을 selectSetNumber 변수에 넣어줌
        }
        console.log(selectSetNumber); // 최종값 콘솔창에 출력
    }

function homerun(){ // 값이 같은지 비교하는 함수
    if(text.value===selectSetNumber.join('')){ // join('')으로 배열을 풀어주어 값 비교
        show.textContent = "홈런!⚾⚾⚾⚾⚾⚾";//값이 값을 시 홈런 출력
        text.style.display = "none"; //값이 값을 시 텍스트 입력창 숨김
        res.style.display = "block"; //값이 값을 시 재시작 버튼 출력
    }
    else{ // 갑이 같지 않다면 
    for(let i = 0; i<selectSetNumber.length; i++){ //배열에 추가된 수만큼 반복 
        if(selectSetNumber[i] === Number(text.value[i])){ //두변수의같은 수가 같은 자리에 있다면 스트라이크의 수를 올려준다.
            st++;
        }
       else if(selectSetNumber.indexOf(Number(text.value[i])) > -1){ 
        //두변수의 수가 같은 자리에 있지 않다면 .indexOf를 사용하고 그전에 문자열 배열을 숫자로 바꾸어주고 동일한 값이 있다면 볼의 수를 올려준다.  
            ba++;
        }    
    }
    show.textContent = st + "스트라이크⚾" + ba +"볼⚾"; // 반복문과 조건문이 모두 종료후 결과 표시
    couS.textContent = "남은기회😨" + cou; // 반복문과 조건문이 모두 종료후 결과 표시
}
}
res.addEventListener("click", function(){ // 재시작 버튼 클릭시 페이지 새로고침으로 처음 개임시작 버튼으로 초기화
    location.reload();
})


