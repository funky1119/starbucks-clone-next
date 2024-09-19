"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./navigation.module.scss";
import Link from "next/link";
import classNames from "classnames";

export default function Navigation() {
  const [searchFocus, setSearchFocus] = useState(false);
  return (
    <header className={styles.header}>
      <div className={`inner ${styles.inner}`}>
        {/* Logo */}
        <Link href={"/"} className={styles.logo}>
          <Image
            src="/images/starbucks_logo.png"
            alt="STARBUCKS_LOGO"
            width={75}
            height={75}
          />
        </Link>
        {/* Sub menu */}
        <div className={styles.subMenu}>
          <ul className={styles.menu}>
            <li>
              <Link href={"#"}>Sign in</Link>
            </li>
            <li>
              <Link href={"#"}>My Starbucks</Link>
            </li>
            <li>
              <Link href={"#"}>Customer Service & ideas</Link>
            </li>
            <li>
              <Link href={"#"}>Find a Store</Link>
            </li>
            <li></li>
          </ul>
          <div
            className={classNames(styles.search, searchFocus && styles.focused)}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          >
            <input type="text" placeholder={searchFocus ? "통합검색" : ""} />
            <div
              className={classNames(
                "material-symbols-outlined",
                styles.focused
              )}
            >
              search
            </div>
          </div>
        </div>
        {/* Main menu */}

        <ul className={styles.mainMenu}>
          <li className={styles.item}>
            <div className={styles.item__name}>COFFEE</div>
            <div className={styles.item__contents}>
              <div className={styles.contents__menu}>
                <ul className={classNames("inner", styles.menu__list)}>
                  <li>
                    <h4>커피</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>스타벅스 원두</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스타벅스 비아</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스타벅스 오리가미</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>에스프레소 음료</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>도피오</Link>
                      </li>
                      <li>
                        <Link href={"#"}>에스프레소 마키아또</Link>
                      </li>
                      <li>
                        <Link href={"#"}>아메리카노</Link>
                      </li>
                      <li>
                        <Link href={"#"}>마키아또</Link>
                      </li>
                      <li>
                        <Link href={"#"}>카푸치노</Link>
                      </li>
                      <li>
                        <Link href={"#"}>라떼</Link>
                      </li>
                      <li>
                        <Link href={"#"}>모카</Link>
                      </li>
                      <li>
                        <Link href={"#"}>리스트레또 비안코</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>커피 이야기</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>스타벅스 로스트 스팩트럼</Link>
                      </li>
                      <li>
                        <Link href={"#"}>최상의 아라비카 원두</Link>
                      </li>
                      <li>
                        <Link href={"#"}>한 잔의 커피가 완성되기까지</Link>
                      </li>
                      <li>
                        <Link href={"#"}>클로버® 커피 추출 시스템</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>최상의 커피를 즐기는 법</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>커피 프레스</Link>
                      </li>
                      <li>
                        <Link href={"#"}>푸어 오버</Link>
                      </li>
                      <li>
                        <Link href={"#"}>아이스 푸어 오버</Link>
                      </li>
                      <li>
                        <Link href={"#"}>커피 메이커</Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          리저브를 매장에서 다양하게 즐기는 법
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.contents__texture}>
                <div className="inner">
                  <h4>나와 어울리는 커피 찾기</h4>
                  <p>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</p>
                  <h4>최상의 커피를 즐기는 법</h4>
                  <p>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</p>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__name}>MENU</div>
            <div className={styles.item__contents}>
              <div className={styles.contents__menu}>
                <ul className={classNames("inner", styles.menu__list)}>
                  <li>
                    <h4>음료</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>콜드 브루</Link>
                      </li>
                      <li>
                        <Link href={"#"}>브루드 커피</Link>
                      </li>
                      <li>
                        <Link href={"#"}>에스프레소</Link>
                      </li>
                      <li>
                        <Link href={"#"}>프라푸치노</Link>
                      </li>
                      <li>
                        <Link href={"#"}>블렌디드 음료</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스타벅스 피지오</Link>
                      </li>
                      <li>
                        <Link href={"#"}>티(티바나)</Link>
                      </li>
                      <li>
                        <Link href={"#"}>기타 제조 음료</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스타벅스 주스(병음료)</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>푸드</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>베이커리</Link>
                      </li>
                      <li>
                        <Link href={"#"}>케익</Link>
                      </li>
                      <li>
                        <Link href={"#"}>샌드위치 & 샐러드</Link>
                      </li>
                      <li>
                        <Link href={"#"}>따뜻한 푸드</Link>
                      </li>
                      <li>
                        <Link href={"#"}>과일 & 요거트</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스낵 & 미니 디저트</Link>
                      </li>
                      <li>
                        <Link href={"#"}>아이스크림</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>상품</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>머그</Link>
                      </li>
                      <li>
                        <Link href={"#"}>글라스</Link>
                      </li>
                      <li>
                        <Link href={"#"}>플라스틱 텀블러</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스테인리스 텀블러</Link>
                      </li>
                      <li>
                        <Link href={"#"}>보온병</Link>
                      </li>
                      <li>
                        <Link href={"#"}>액세서리</Link>
                      </li>
                      <li>
                        <Link href={"#"}>커피 용품</Link>
                      </li>
                      <li>
                        <Link href={"#"}>패키지 티(티바나)</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>카드</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>실물카드</Link>
                      </li>
                      <li>
                        <Link href={"#"}>e-Gift 카드</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>메뉴 이야기</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>콜드 브루</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스타벅스 티바나</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.contents__texture}>
                <div className="inner">
                  <h4 className={styles.new}>스타벅스 티바나</h4>
                  <p>
                    다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의
                    티를 선보입니다.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__name}>STORE</div>
            <div className={styles.item__contents}>
              <div className={styles.contents__menu}>
                <ul className={classNames("inner", styles.menu__list)}>
                  <li>
                    <h4>매장 찾기</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>퀵 검색</Link>
                      </li>
                      <li>
                        <Link href={"#"}>지역 검색</Link>
                      </li>
                      <li>
                        <Link href={"#"}>My 매장</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>매장 이야기</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>청담스타</Link>
                      </li>
                      <li>
                        <Link href={"#"}>티바나 인스파이어드 매장</Link>
                      </li>
                      <li>
                        <Link href={"#"}>파미에파크</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.contents__texture}>
                <div className="inner">
                  <h4>매장 찾기</h4>
                  <p>보다 빠르게 매장을 찾아보세요.</p>
                  <h4 className={styles.new}>청담스타</h4>
                  <p>스타벅스 1,000호점인 청담스타점을 만나보세요.</p>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__name}>RESPONSIBILITY</div>
            <div className={styles.item__contents}>
              <div className={styles.contents__menu}>
                <ul className={classNames("inner", styles.menu__list)}>
                  <li>
                    <h4>지역 사회 참여 활동</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>회망배달 캠페인</Link>
                      </li>
                      <li>
                        <Link href={"#"}>재능기부 카페 소식</Link>
                      </li>
                      <li>
                        <Link href={"#"}>커뮤니티 스토어</Link>
                      </li>
                      <li>
                        <Link href={"#"}>청년인재 양성</Link>
                      </li>
                      <li>
                        <Link href={"#"}>우리 농산물 사랑 캠페인</Link>
                      </li>
                      <li>
                        <Link href={"#"}>우리 문화 지키기</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>환경보호 활동</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>환경 발자국 줄이기</Link>
                      </li>
                      <li>
                        <Link href={"#"}>일회용 컵 없는 매장</Link>
                      </li>
                      <li>
                        <Link href={"#"}>커피 원두 재활용</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>윤리 구매</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>윤리적 원두 구매</Link>
                      </li>
                      <li>
                        <Link href={"#"}>공정무역 인증</Link>
                      </li>
                      <li>
                        <Link href={"#"}>커피 농가 지원 활동</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>글로벌 사회 공헌</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>윤리경영 보고서</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스타벅스 재단</Link>
                      </li>
                      <li>
                        <Link href={"#"}>지구촌 봉사의 달</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.contents__texture}>
                <div className="inner">
                  <h4>커피원두 재활용</h4>
                  <p>스타벅스 커피 원두를 재활용 해보세요.</p>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__name}>{"MY STARBUCKS REWARDS"}</div>
            <div className={styles.item__contents}>
              <div className={styles.contents__menu}>
                <ul className={classNames("inner", styles.menu__list)}>
                  <li>
                    <h4>마이 스타벅스 리워드</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>마이 스타벅스 리워드 소개</Link>
                      </li>
                      <li>
                        <Link href={"#"}>등급 및 혜택</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스타벅스 별</Link>
                      </li>
                      <li>
                        <Link href={"#"}>자주하는 질문</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>스타벅스 카드</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>스타벅스 카드 소개</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스타벅스 카드 갤러리</Link>
                      </li>
                      <li>
                        <Link href={"#"}>등록 및 조회</Link>
                      </li>
                      <li>
                        <Link href={"#"}>충전 및 이용안내</Link>
                      </li>
                      <li>
                        <Link href={"#"}>분실신고/환불신청</Link>
                      </li>
                      <li>
                        <Link href={"#"}>자주하는 질문</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>스타벅스 카드 e-Gift</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>스타벅스 카드 e-Gift 소개</Link>
                      </li>
                      <li>
                        <Link href={"#"}>이용안내</Link>
                      </li>
                      <li>
                        <Link href={"#"}>선물하기</Link>
                      </li>
                      <li>
                        <Link href={"#"}>자주하는 질문</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.contents__texture}>
                <div className="inner">
                  <h4>스타벅스 카드 등록하기</h4>
                  <p>
                    카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__name}>{`WHAT'S NEW`}</div>
            <div className={styles.item__contents}>
              <div className={styles.contents__menu}>
                <ul className={classNames("inner", styles.menu__list)}>
                  <li>
                    <h4>프로모션 & 이벤트</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>전체</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스타벅스 카드</Link>
                      </li>
                      <li>
                        <Link href={"#"}>마이 스타벅스 리워드</Link>
                      </li>
                      <li>
                        <Link href={"#"}>온라인</Link>
                      </li>
                      <li>
                        <Link href={"#"}>2017 스타벅스 플래너</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>새소식</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>전체</Link>
                      </li>
                      <li>
                        <Link href={"#"}>상품 출시</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스타벅스의 문화</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스타벅스 사회공헌</Link>
                      </li>
                      <li>
                        <Link href={"#"}>스타벅스 카드출시</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>매장별 이벤트</h4>
                    <ul>
                      <li>
                        <Link href={"#"}>일반 매장</Link>
                      </li>
                      <li>
                        <Link href={"#"}>신규 매장</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.contents__texture}>
                <div className="inner">
                  <h4>매장별 이벤트</h4>
                  <p>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</p>
                  <h4>소셜 스타벅스</h4>
                  <p>다양한 스타벅스 SNS 채널을 통해 스타벅스를 만나보세요!</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
