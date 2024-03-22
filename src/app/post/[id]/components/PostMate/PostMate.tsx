"use client";

import Link from "next/link";
import MateCard from "@/components/MateCard";
import * as S from "./PostMate.styles";
import { MateDetailResponse } from "@/types/Response";

interface PostMateProps {
  mateData: MateDetailResponse[];
}

const PostMate = ({ mateData }: PostMateProps) => {
  const { openModal, setModalView } = useUI();

  const handleClick = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };

  return (
    <>
      {mateData.length > 0 && (
        <S.PostMateList>
          {mateData.map(
            ({ id, title, authorProfileUrl, authorNickname, gatheringAt, capacity, status }) => (
              <li key={id}>
                <Link
                  href={`/mate/${id}`}
                  title={title}
                >
                  <MateCard
                    profileImage={authorProfileUrl}
                    nickName={authorNickname}
                    title={title}
                    date={gatheringAt}
                    capacity={capacity}
                    status={status}
                  />
                </Link>
              </li>
            ),
          )}
        </S.PostMateList>
      )}
      {mateData.length === 0 && (
        <S.PostMateEmptyMessage>등록중인 메이트 모집 글이 없습니다.</S.PostMateEmptyMessage>
      )}
    </>
  );
};

export default PostMate;
