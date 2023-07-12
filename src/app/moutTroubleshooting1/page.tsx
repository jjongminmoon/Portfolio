import Flex from "@/components/ui/Flex";
import SubTitle from "@/components/ui/SubTitle";
import Title from "@/components/ui/Title";
import TroubleShooting from "@/components/ui/TroubleShooting";
import firestoreMethod from "../../../public/images/firestoreMethod.webp";
import contextAPI from "../../../public/images/contextAPI.webp";
import SolveItem from "@/components/ui/SolveItem";
import PreviousButton from "@/components/ui/PreviousButton";

export default function TroubleShooting1() {
  return (
    <TroubleShooting>
      <PreviousButton />
      <Title>🔥 Firestore Database 업데이트 메서드</Title>
      <Flex>
        <SubTitle>문제</SubTitle>
        <p>
          유저별 장바구니를 실시간으로 조회하고 업데이트 하는 로직에서 계속된 오류들이 발생하고,
          코드가 길어짐.
        </p>
      </Flex>
      <Flex>
        <SubTitle>원인</SubTitle>
        <p>
          처음 사용하는 기술로 잘못된 메서드로 함수 내에 코드를 작성했고, 함수 실행에서의 오류
          해결에만 몰두해 같은 결과값을 갖는 코드들을 컴포넌트 내에 중복으로 사용했다.
        </p>
      </Flex>
      <SubTitle>해결 과정</SubTitle>
      <SolveItem image={firestoreMethod} alt="firestore 코드 이미지">
        <p>
          ✅ 좌측 코드 이미지는 기존에 회원가입 시 유저 데이터베이스에 자동으로 추가되는 코드였는데,
          유저 데이터베이스의 카트 배열에도 동일하게 addDoc 메서드를 사용해 제품을 추가하려는
          로직에서 계속해서 오류가 발생했다.
        </p>
        <p>
          ✅ Firebase 공식문서를 다시 정독해 전체 문서가 아닌 일부 필드에 데이터를 추가할 때
          사용해야 하는 메서드가 다르다는 것을 알 수 있었고, updateDoc / arrayUnion 2가지 메서드를
          혼합해 다시 코드를 작성했다.
        </p>
        <p>✅ 우측 코드 이미지와 같이 2가지의 메서드로 로직을 수정해 오류를 해결할 수 있었다.</p>
      </SolveItem>
      <SolveItem image={contextAPI} alt="context api 코드 이미지">
        <p>
          ✅ 코드가 길어지는 문제는 공통적으로 값은 값이 필요한 유저 데이터베이스 id를 context api를
          통해 전역적으로 사용할 수 있도록 하여 컴포넌트 내에서 한 줄로 불러올 수 있도록 했다.
        </p>
      </SolveItem>
    </TroubleShooting>
  );
}
