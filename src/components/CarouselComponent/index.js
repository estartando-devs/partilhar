import Carousel from "react-elastic-carousel";
import * as S from "./styles";

const CarouselComponent = ({ children }) => {
  return (
    <S.Container>
      <S.Content>
        <Carousel
          initialActiveIndex={2}
          showArrows={false}
          itemPadding={[0, 5, 0, 0]}
          enableMouseSwipe={false}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <S.Dots>
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <S.Dot
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                    />
                  );
                })}
              </S.Dots>
            );
          }}
        >
          {children}
        </Carousel>
      </S.Content>
    </S.Container>
  );
};

export default CarouselComponent;
