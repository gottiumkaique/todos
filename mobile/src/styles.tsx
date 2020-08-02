import styled from "styled-components/native"
import { StatusBar } from "react-native"

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`