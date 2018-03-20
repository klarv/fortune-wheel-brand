export class Prize {
    constructor(
        public _id: number = Math.floor(Math.random() * 100),
        public prize_value: string = "",
        public prize_type: string = "",
        public prize_probability: number = 0,
        public prize_spots: number = 0,
        public editable: boolean = false,
        public brand_name: string = ""
    ) {

    }
}
