

export function dateParse(dateString: Date) {

    const date = new Date(dateString);
    const options: any = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleString('en-US', options);

    return formattedDate;

}