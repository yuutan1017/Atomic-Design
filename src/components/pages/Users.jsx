import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
    return {
        id: val,
        name: `yuutan ${val}`,
        image: "https://source.unsplash.com/sR0cTmQHPug",
        email: "n@gmail.com",
        phone: "000 - 0000 - 000",
        company: {
            name: "google",
        },
        website: "https://google.com",
    }
}))

export const Users = () => {
    return (
        <SContainer>
            <h2>User page</h2>
            <SearchInput />
            <SUerArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUerArea>
        </SContainer>
    );
};

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SUerArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`;