import styled from "@emotion/styled";
// redux
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/modalReducer";
import { ModalType } from "@/redux/modalReducer";

type Iprops = Partial<ModalType> & {
	children: any;
};

const Modal = ({
	children,
	title,
	hasClose = true,
	bgFilter = true,
	isTopFixed = !!title && hasClose, // 타이틀과 닫힘버튼 있으면 기본값 true
}: Iprops) => {
	const dispatch = useDispatch();
	const handleClick = {
		close: () => {
			dispatch(closeModal());
		},
	};

	return (
		<Container onClick={() => handleClick.close()} bgFilter={bgFilter}>
			<ModalBox onClick={(e) => e.stopPropagation()} isTopFixed={isTopFixed}>
				{(hasClose || !!title) && (
					<TitleBox isTopFixed={isTopFixed}>
						<Title>{title}</Title>
						{hasClose ? (
							<Close onClick={() => handleClick.close()}>
								<i className="close">x</i>
							</Close>
						) : null}
					</TitleBox>
				)}
				<ContentBox>{children}</ContentBox>
			</ModalBox>
		</Container>
	);
};

export default Modal;

const Container = styled.div<{ bgFilter: boolean }>`
	z-index: 999;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	background: ${(props) => (props.bgFilter ? "#00000070" : "#0000")};
`;

const ModalBox = styled.div<{ isTopFixed: boolean }>`
	position: relative;
	padding: 3rem;
	max-height: 95vh;
	border-radius: var(--border-radius-mid);
	max-width: 95%;
	overflow: auto;
	background-color: white;
	/* isTopFixed면 ModalBox의 padding-top 없애고 TitleBox에 넣어줌 */
	padding-top: ${(props) => (props.isTopFixed ? "0px !important" : undefined)};
	@media screen and (max-width: 1024px) {
		padding: 2rem;
	}
`;

const TitleBox = styled.div<{ isTopFixed: boolean }>`
	z-index: 11;
	position: sticky;
	top: 0;
	background-color: ${(props) => (props.isTopFixed ? "inherit" : undefined)};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	/* isTopFixed면 ModalBox의 padding-top 없애고 TitleBox에 넣어줌 */
	padding: ${(props) => (props.isTopFixed ? "3rem 3rem 2rem" : undefined)};
	margin: ${(props) => (props.isTopFixed ? "0 -3rem" : undefined)};
	@media screen and (max-width: 1024px) {
		padding: ${(props) => (props.isTopFixed ? "2rem" : undefined)};
		margin: ${(props) => (props.isTopFixed ? "0 -2rem" : undefined)};
	}
`;
const Title = styled.div`
	font-size: 22px;
	font-weight: 700;
`;
const Close = styled.div`
	width: 24px;
	height: 24px;
	color: #999;
	font-size: 24px;
	font-weight: 600;
	z-index: 100;

	&:hover {
		cursor: pointer;
	}
`;

const ContentBox = styled.div`
	width: 100%;
`;
