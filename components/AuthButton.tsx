const client_id = '4a98422fd9aa45481d00';
const redirect_uri = 'http://localhost:3007/';

export function AuthButton() {
  return (
      <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}>
        Login with Github
      </a>
  )
}
