# React Native Project  
리액트 네이티브 앱을 만들어보자



 

### 리액트 네이브를 사용하기 위한 개발환경에는 대표적으로 두가지가 있다.

> Expo 혹은 React Native CLI

진행할 방법 : 먼저 Expo를 이용해서 개발 후  
프로젝트에서는 React Native CLI를 이용해서 개발한다. 



#### 리액트 네이티브 설치를 위해서 필요한 것들

Node.js 설치, 코드에디터(VS code)

1. expo를 이용한 리액트 네이티브 앱 생성  
```npx create-expo-app AwesomeProject```

2. npm start로 앱 실행
```npm start```

만약 오류 메시지가 
> 'expo'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는
배치 파일이 아닙니다.

라고 나온다면? -> 
참고 : https://www.inflearn.com/questions/236890/x27-expo-x27-%EA%B0%80-%EB%82%B4%EB%B6%80-%EC%99%B8%EB%B6%80-%EB%AA%85%EB%A0%B9-%EC%8B%A4%ED%96%89-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EB%98%90%EB%8A%94-%EB%B0%B0%EC%B9%98-%ED%8C%8C%EC%9D%BC%EC%9D%B4-%EC%95%84%EB%8B%88%EB%9D%BC%EB%84%A4%EC%9A%94 참고

```npm i -g expo-cli```
```npm install```

그 후 ```npx export start```로 실행 


![image](https://github.com/mongsukim/ReactNativeProject/assets/29091608/61031e62-d284-4d88-bd48-d6187dafb447)

이 화면이 나오면 된다. 


3. 핸드폰 > App store에서 Expo go 앱을 설치한다.


### 시뮬레이터 설치하기 

1. 안드로이드의 경우 > 구글에 android studio 검색 > 안드로이드 스튜디오 설치 

![image](https://github.com/mongsukim/ReactNativeProject/assets/29091608/cff98701-da88-47d5-a988-086b0c6fcc97)


2. 설치 후 More Actions > Virtual Device Manager > Create Device 

![image](https://github.com/mongsukim/ReactNativeProject/assets/29091608/e39ce490-b366-4097-ae46-134f437e4a3e)
![image](https://github.com/mongsukim/ReactNativeProject/assets/29091608/8fdba532-2600-4a4c-b2fb-3447365318a6)

![image](https://github.com/mongsukim/ReactNativeProject/assets/29091608/c50934eb-07d5-4999-b64d-8a7e5476b8e0)

![image](https://github.com/mongsukim/ReactNativeProject/assets/29091608/0769c73c-308b-4fd1-92ca-d60ac103748b)

여기서 중요! 저 재생버튼을 눌러준다.. 
그 후, vscode로 돌아와서 a버튼을 눌러준다. 

![image](https://github.com/mongsukim/ReactNativeProject/assets/29091608/f09c1d8d-7f4a-445f-94c9-cc9546c2b42b)
만약 위 같은 오류가 난다면, 터미널을 하나 더 띄운 후에 
```adb kill-server```
```adb start-server```
하거나 아니면 에뮬레이터에서 재생 버튼 눌러서 실행하고 a 누르기 .

잘 실행된다면 이런게 나온다. 

오류상황 : Error: adb.exe: device offline

![image](https://github.com/mongsukim/ReactNativeProject/assets/29091608/a392f7c2-2560-427d-92ea-c33ed0b5bec4)





<hr/>  


익스텐션 설치  
![image](https://github.com/mongsukim/ReactNativeProject/assets/29091608/c6d9a70b-e445-4ace-b92c-806bcd672479)


<hr/>


