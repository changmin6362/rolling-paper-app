import style from 'styled-components';
import bold from 'assets/images/forms/bold_icon.svg';
import italic from 'assets/images/forms/italics.svg';
import underScore from 'assets/images/forms/under_score.svg';
import centerAligned from 'assets/images/forms/center_aligned.svg';
import rightAligned from 'assets/images/forms/right_aligned.svg';
import justify from 'assets/images/forms/justify.svg';
import numbering from 'assets/images/forms/numbering.svg';
import bullet from 'assets/images/forms/bullet.svg';
import fill from 'assets/images/forms/fill.svg';
import fontSize from 'assets/images/forms/font_size.svg';

export default function TextFieldTextEditor() {
  return (
    <StyledContainer>
      <ButtonContainer>
        <StyledImg>
          <img src={bold} alt="bold" />
          <img src={italic} alt="italic" />
          <img src={underScore} alt="underScore" />
        </StyledImg>
        <StyledImg>
          <img src={centerAligned} alt="centerAligned" />
          <img src={rightAligned} alt="rightAligned" />
          <img src={justify} alt="justify" />
        </StyledImg>
        <StyledImg>
          <img src={numbering} alt="numbering" />
          <img src={bullet} alt="bullet" />
        </StyledImg>
        <StyledImg>
          <img src={fill} alt="fill" />
          <img src={fontSize} alt="fontSize" />
        </StyledImg>
      </ButtonContainer>
      <StyledTextInput placeholder="I am your reach text editor." type="text" />
    </StyledContainer>
  );
}

const StyledContainer = style.div`
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.gray300};

  width: 72rem;
  height: 26rem;
  padding: 0.1rem 0.1rem 1.6rem;
  posision: relative;

  display: flex;
  flex-direction: column;
  
`;

const ButtonContainer = style.div`
  height: 4.9rem;
  padding: 1.4rem;
  background-color: ${({ theme }) => theme.gray200};
  display: flex;
`;

const StyledImg = style.div`
  height: 2.4rem;
  display: flex;
  gap: 0.2rem;
  margin-right: 1.6rem;

  & > img {
  width: 2.4rem;
  height: 2.4rem;
  object-fit: fill;
  padding: 0.5rem;
  }
`;

const StyledTextInput = style.textarea`
  color: ${({ theme }) => theme.gray900};
  width: 68.8rem;
  height: 17.8rem;
  margin: 1.6rem;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.01em;
  text-align: left;

  padding-bottom: 11rem;
  padding-left: 1rem;
  overflow: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
