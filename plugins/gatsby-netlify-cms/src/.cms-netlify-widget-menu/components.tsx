import styled from "styled-components";

const BaseListItem = styled.li`
line-height: 1.5;
font-weight: lighter;  
list-style-type: none;
margin-bottom: 0.25rem;
margin-top: 0.25rem;
padding: 0px 0 3px 28px;
`;

const LinkListItem = styled(BaseListItem)`
background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNEU1QzZFIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMTE4NjI3LDAuMDExODYyNywtMC4wMTE4NjI3LDAuMDExODYyNywxMi4wMDEsMC4xMzczMzIpIj48cGF0aCBkPSJNOTIyLjQsODEuNEw5MTguNSw3Ny41QzgyOC41LC0xMi41IDY4MSwtMTIuNSA1OTEsNzcuNkwzODIuMiwyODYuM0MyOTIuMSwzNzYuNCAyOTIuMSw1MjMuOCAzODIuMiw2MTMuOUMzODIuMiw2MTMuOSA0MDYuMzczLDYzNi4yMzUgNDE3LjM1Nyw2MzAuNzQzQzQzNC42OSw2MjIuMDc3IDQ2OC44NDMsNTg3LjkyNCA0NzYuNzU5LDU3MS4zNDFDNDgyLjA3Miw1NjAuMjExIDQ1Ny4zLDUzOC44IDQ1Ny4zLDUzOC44QzQwOC40LDQ4OS45IDQwOC40LDQxMC4zIDQ1Ny4zLDM2MS40TDY2Ni4xLDE1Mi43QzcxNSwxMDMuOCA3OTQuNiwxMDMuOCA4NDMuNSwxNTIuN0w4NDcuNCwxNTYuNkM4OTYuMywyMDUuNSA4OTYuMywyODUuMSA4NDcuNCwzMzRMNzUzLDQyOC40Qzc2OS40LDQ2OC45IDc0Mi43MTQsNTQ4LjYzMiA3NzAuOTY0LDU0NS40MTVDNzk5LjIxNCw1NDIuMTk5IDkyMi41LDQwOS4xIDkyMi41LDQwOS4xQzEwMTIuNSwzMTkgMTAxMi41LDE3MS41IDkyMi40LDgxLjRaTTYxMy45LDM4Mi4yQzYwNi40LDM3NC43IDU5MC45MjcsMzY1IDU4MS44MDcsMzcwLjA5M0M1NjUuMTI0LDM3OS40MSA1MzEuOTQ2LDQxMi41ODggNTIzLjM3OSw0MjguNTIxQzUxOC40MDMsNDM3Ljc3NiA1MzEuMSw0NDkuNyA1MzguOCw0NTcuM0w1NDIuNyw0NjEuMkM1OTEuNiw1MTAuMSA1OTEuNiw1ODkuNyA1NDIuNyw2MzguNkwzMzMuOSw4NDcuNEMyODUsODk2LjMgMjA1LjQsODk2LjMgMTU2LjUsODQ3LjRMMTUyLjYsODQzLjVDMTAzLjcsNzk0LjYgMTAzLjcsNzE1IDE1Mi42LDY2Ni4xTDI0Nyw1NzEuN0MyMzAuNiw1MzEuMiAyNTIuMTc5LDQ1OS4wODggMjIzLjkyOSw0NjIuMzA1QzE5NS42NzksNDY1LjUyMiA3Ny41LDU5MSA3Ny41LDU5MUMtMTIuNiw2ODEuMSAtMTIuNiw4MjguNSA3Ny41LDkxOC42TDgxLjQsOTIyLjVDMTcxLjUsMTAxMi42IDMxOC45LDEwMTIuNiA0MDksOTIyLjVMNjE3LjcsNzEzLjhDNzA3LjgsNjIzLjcgNzA3LjgsNDc2LjMgNjE3LjcsMzg2LjJMNjEzLjksMzgyLjJaIi8+PC9nPjwvc3ZnPg==) no-repeat left top;  
`;

const PlusListItem = styled(BaseListItem)`
background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNEU1QzZFIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLDExIEwxMyw2IEMxMyw1LjQ0NzcxNTI1IDEyLjU1MjI4NDcsNSAxMiw1IEMxMS40NDc3MTUzLDUgMTEsNS40NDc3MTUyNSAxMSw2IEwxMSw2IEwxMSwxMSBMNiwxMSBDNS40NDc3MTUyNSwxMSA1LDExLjQ0NzcxNTMgNSwxMiBDNSwxMi41NTIyODQ3IDUuNDQ3NzE1MjUsMTMgNiwxMyBMMTEsMTMgTDExLDE4IEMxMSwxOC41NTIyODQ3IDExLjQ0NzcxNTMsMTkgMTIsMTkgQzEyLjU1MjI4NDcsMTkgMTMsMTguNTUyMjg0NyAxMywxOCBMMTMsMTMgTDE4LDEzIEMxOC41NTIyODQ3LDEzIDE5LDEyLjU1MjI4NDcgMTksMTIgQzE5LDExLjQ0NzcxNTMgMTguNTUyMjg0NywxMSAxOCwxMSBMMTMsMTEgWiI+PC9wYXRoPjwvc3ZnPg==) no-repeat left center;
`;

const GroupListItem = styled(BaseListItem)`
background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNEU1QzZFIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcsNCBMMTcsNCBDMTguMTA0NTY5NSw0IDE5LDQuODk1NDMwNSAxOSw2IEwxOSwxOCBDMTksMTkuMTA0NTY5NSAxOC4xMDQ1Njk1LDIwIDE3LDIwIEw3LDIwIEM1Ljg5NTQzMDUsMjAgNSwxOS4xMDQ1Njk1IDUsMTggTDUsNiBMNSw2IEM1LDQuODk1NDMwNSA1Ljg5NTQzMDUsNCA3LDQgTDcsNCBaIE03LjUsNiBDNy4yMjM4NTc2Myw2IDcsNi4yMjM4NTc2MyA3LDYuNSBMNywxNy41IEM3LDE3Ljc3NjE0MjQgNy4yMjM4NTc2MywxOCA3LjUsMTggTDguNSwxOCBDOC43NzYxNDIzNywxOCA5LDE3Ljc3NjE0MjQgOSwxNy41IEw5LDYuNSBDOSw2LjIyMzg1NzYzIDguNzc2MTQyMzcsNiA4LjUsNiBMNy41LDYgWiI+PC9wYXRoPjwvc3ZnPg==) no-repeat left top;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 0px;
min-width: 0px;
flex: initial;

border-width: 2px;
border-style: solid;
border-color: rgb(223, 223, 227);
border-image: initial;
border-radius: 0px 5px 5px;
padding: 10px;
`;

const UL = styled.ul`
    margin: 0;
`;

const I = styled.i`
border: solid #4e5c6e;
border-width: 0 2px 2px 0;
display: inline-block;
padding: 3px;
margin-left: 6px;
margin-right: 6px;
`;

const ArrowUp = styled(I)`
transform: rotate(-135deg);
-webkit-transform: rotate(-135deg);
`;

const ArrowDown = styled(I)`
transform: rotate(45deg);
-webkit-transform: rotate(45deg);
`;

export {Container, GroupListItem, PlusListItem, LinkListItem, UL, ArrowUp, ArrowDown};