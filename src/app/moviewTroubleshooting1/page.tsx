import Flex from "@/components/ui/Flex";
import PreviousButton from "@/components/ui/PreviousButton";
import SolveItem from "@/components/ui/SolveItem";
import SubTitle from "@/components/ui/SubTitle";
import Title from "@/components/ui/Title";
import TroubleShooting from "@/components/ui/TroubleShooting";
import formData from "../../../public/images/formData.webp";

export default function MoviewTroubleshooting1() {
  return (
    <TroubleShooting>
      <PreviousButton />
      <Title>🔥 POST FormData 전송</Title>
      <Flex>
        <SubTitle>문제</SubTitle>
        <p>
          리뷰 작성 로직 POST 요청에서 body 부분에 Sanity 데이터베이스 구조와 같은 객체를 직접
          작성해 보냈지만, 폼 안에 작성된 데이터들이 객체 그대로 전송되어 리뷰 내용이 빈 값으로
          나타남
        </p>
      </Flex>
      <Flex>
        <SubTitle>원인</SubTitle>
        <p>
          body 부분에 데이터베이스 구조와 같은 객체를 넣는 것이 깔끔하다고 생각해 로직을 작성했지만,
          폼 안에 작성된 데이터뿐만이 아니라 사용자 id, 배열들이 리뷰 데이터베이스에 포함되어 있어
          다른 필드 값들은 전송이 되지만 객체 값은 인식하지 못했다.
        </p>
      </Flex>
      <SubTitle>해결 과정</SubTitle>
      <SolveItem image={formData} alt="formData 코드 이미지">
        <p>✅ FormData를 body 부분에 전송한 후 값 하나씩 Sanity 클라이언트 메서드에 추가했다.</p>
        <p>
          ▶ onSubmit 함수 로직에 FormData를 만들고, 내부의 키와 값에 폼을 통해 받은 데이터들을
          append() 메서드를 통해 추가한 뒤 POST 요청의 body 부분에 데이터를 담아 전송
        </p>
        <p>
          ▶ form 키에 해당하는 첫 번째 값을 toString() 메서드를 통해 문자열로 리턴한 후, Sanity
          클라이언트 메서드를 사용한 함수에서 해당 키에 맞는 리턴값을 통해 데이터베이스에 저장
        </p>
      </SolveItem>
    </TroubleShooting>
  );
}
