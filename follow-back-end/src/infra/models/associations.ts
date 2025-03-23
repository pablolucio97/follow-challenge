import { CepSearch } from "./CepSearch";
import { User } from "./User";

User.hasMany(CepSearch, {
  foreignKey: "user_id",
  as: "cep_searches",
});

CepSearch.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});
