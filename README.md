# Node

## server.js

> main부분이며, 서버가 시작하는 부분이다.

## routes.js

> api에 주소 부분으로 해석이 된다. ex) /api/test

## controller

> api에서 받은 request,response를 처리하는 부분이다.

# Jest

## jest.fn

> 테스트 하려는 코드가 의존하는 부분이 존재한다면 가짜 함수를 만들어서 대체해준다(라이브러리나 DB).

## mockReturnValue

> jest.fn에서의 가짜 return 값을 설정해준다.

## toHaveBeenCalledWith

> 함수가 호출 되었는지 확인위해 사용된며, 인자에 같이 호출되는 값을 넣어준다.

## toStrictEqual

> return값이 객체 일때 비교하기 위해 사용된다.

## toBeTruthy

> true값을 확인하기위해 사용됨.
