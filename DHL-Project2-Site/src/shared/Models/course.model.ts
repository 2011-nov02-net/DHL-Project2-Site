export class Course {
    id: number;
    name: string;
	description: string;
	creditValue: number;
	departmentId: number;
	code?: number;
	session: number;
	category: number;
	capacity: number;
	waitlistCapacity: number;
}
