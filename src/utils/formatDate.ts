// Cria uma Arrow Function que recebe o parâmetro date como String
const formatDate = (date: string): string => {
  // dateFormatted recebe através da função a data atual
  const dateFormatted = new Date(date);
  // year pega o ano de dateFormatted
  const year = dateFormatted.getFullYear();
  /* 
   * day pega o dia de dateFormatted
   * Caso o dia for maior que 9 ele não receberá nenhuma alteração, pois
   * ele possui dois dígitos, se ele não for maior que nove será acrescentado
   * um 0 antes do número
   */
  const day =
    dateFormatted.getDate() > 9
      ? dateFormatted.getDate()
      : `0${dateFormatted.getDate()}`;
  // month pega o mês de dateFormatted
  const month =
    dateFormatted.getMonth() + 1 > 9
      ? dateFormatted.getMonth() + 1
      : `0${dateFormatted.getMonth() + 1}`;

  // Retorna a formatação como 11/11/1111
  return `${day}/${month}/${year}`;
};

export default formatDate;
