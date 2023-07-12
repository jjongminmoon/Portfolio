import Flex from "@/components/ui/Flex";
import PreviousButton from "@/components/ui/PreviousButton";
import SolveItem from "@/components/ui/SolveItem";
import SubTitle from "@/components/ui/SubTitle";
import Title from "@/components/ui/Title";
import TroubleShooting from "@/components/ui/TroubleShooting";
import debounce from "../../../public/images/debounce.webp";
import debounceResult from "../../../public/images/debounceResult.webp";

export default function MoviewTroubleshooting2() {
  return (
    <TroubleShooting>
      <PreviousButton />
      <Title>🔥 검색어 자동완성 최적화</Title>
      <Flex>
        <SubTitle>문제 및 원인</SubTitle>
        <p>
          웹 성능 최적화와 관련한 글을 읽고, 검색어 자동완성에서 짧은 시간 동안 많은 API를 호출하게
          되어 네트워크 트래픽 증가로 이어진다는 것을 인지
        </p>
      </Flex>
      <SubTitle>해결 과정</SubTitle>
      <SolveItem image={debounce} alt="debounce 코드 이미지">
        <p>
          ✅ Debounce를 통해 지정한 시간 안에서 연속적으로 호출되는 이벤트 중 마지막 이벤트만을 호출
        </p>
        <p>
          ✅ 또한, 검색어 자동완성이 사용되는 컴포넌트에서 쉽게 사용이 가능하도록 Debounce 훅을
          만들어 재사용성을 높임
        </p>
      </SolveItem>
      <SolveItem image={debounceResult} alt="debounce 수치 비교">
        <p>✅ 동일한 검색어를 입력했을 때의 API 호출과 시간 비교 이미지</p>
        <p>
          ✅ 좌측 이미지는 Debounce 훅을 사용하지 않은 코드로, 키워드가 입력될 때마다 API가 호출되고
          최종적으로 호출된 시간도 오래 걸렸다.
        </p>
        <p>
          ✅ 우측 이미지는 Debounce 훅을 사용한 코드로, 검색어가 입력된 후 마지막 이벤트에 대해서만
          API가 한 번 호출되고 시간도 단축되었다.
        </p>
      </SolveItem>
    </TroubleShooting>
  );
}
