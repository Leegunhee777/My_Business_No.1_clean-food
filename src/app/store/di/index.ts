
import { ListRepositoryImpl } from "../repository/list-repository-impl";
import { ListUseCase } from "../usecase/list-usecase";
import { HttpClient } from "../../../network/axios";
import { getCsrfToken } from "../../../context/auth-context-provider";

const http = new HttpClient(getCsrfToken());
const listRepositoryImpl = new ListRepositoryImpl(http);
const listUseCase = new ListUseCase(listRepositoryImpl);

export {
  listUseCase,
};