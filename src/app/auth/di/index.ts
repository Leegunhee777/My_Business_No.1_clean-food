import { AuthUseCase} from "../usecase/auth-usecease";
import { HttpClient } from "../../../network/axios";
import { getCsrfToken } from "../../../context/auth-context-provider";
import { AuthRepositoryImpl } from "../repository/auth-repository-impl";

const http = new HttpClient(() => getCsrfToken());
const authRepositoryImpl = new AuthRepositoryImpl(http);
const authUseCase = new AuthUseCase(authRepositoryImpl);

export {
  authUseCase,
};