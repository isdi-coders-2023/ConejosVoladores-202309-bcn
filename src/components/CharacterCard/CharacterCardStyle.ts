import { styled } from "styled-components";

const CharacterCardStyle = styled.div`
  background-color: ${({ theme }) => theme.color.containerBackground};
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  border-radius: 24px;
  width: calc(100vw - 44px);
  max-width: 316px;

  .character-card {
    &__image {
      width: 110px;
      height: 110px;
      align-self: center;
    }

    &__property {
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: 0 14px;

      & * {
        padding: 5px 0;
      }
    }

    &__icon-container {
      display: flex;
      gap: 37px;
      justify-content: center;

      &__image {
        border-radius: 40px;

        &:active {
          filter: invert(100%);
          border: 1px solid ${({ theme }) => theme.color.secondaryFont};
        }
      }
    }
  }
`;

export default CharacterCardStyle;
