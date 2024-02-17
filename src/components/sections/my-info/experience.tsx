export default function Experience({
  nomeEmpresa,
  cargo,
  descricao,
  dataInicio,
  dataFim,
}: {
  nomeEmpresa: string;
  dataInicio: string;
  dataFim: string;
  cargo: string;
  descricao: string;
}) {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-500">
          {nomeEmpresa}
        </h3>
        <span className="text-xs">
          {dataInicio} - {dataFim}
        </span>
      </div>
      <div>
        <span className="font-display font-semibold">Cargo:</span> {cargo}
      </div>
      <div>
        <span className="font-display font-semibold">Descrição:</span>{" "}
        {descricao}
      </div>
    </div>
  );
}
