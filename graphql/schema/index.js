import { buildSchema } from 'graphql'

const schema = buildSchema(`
	type Auth {
		id: ID!
		token: String!
		tokenExpiration: Int!
	}

	input AuthInput {
		phone: String!
		password: String!
	}

	type Users {
		id: ID!
		first_name: String!
		last_name: String!
		photo: String
		cover: String
		sex: Int!
		type: Int!
		verified: Boolean
	}

	input UsersInput {
		phone: String!
		email: String!
		password: String!
		first_name: String!
		last_name: String!
		sex: Int!
		type: Int!
	}

	type Pages {
		id: ID!
		user_id: ID!
		name: String!
		about: String
		photo: String
		cover: String
		verified: Boolean
	}

	input PagesInput {
		name: String!
		about: String
	}

	type Wall {
		id: ID!
		from_id: ID!
		owner_id: ID!
		text: String!
		date: String!
	}

	input WallInput {
		owner_id: ID!
		text: String!       
	}

	type Audio {
		id: ID!
		owner_id: ID!
		title: String!
		artist: String!
		cover: String!
		audio: String!
		date: String!
	}

	type Photos {
		id: ID!
		owner_id: ID!
		photo: String!
		date: String!
	}

	type RootQuery {
		users(id: String): Users
		pagesFindById(id: String): Pages
		wall(owner_id: String): [Wall]
		audio(owner_id: String): [Audio]
		photos(owner_id: String): [Photos]
	}

	type RootMutation {
		login(input: AuthInput): Auth
		signup(input: UsersInput): Auth
		pagesCreate(input: PagesInput): Pages
		wallPost(input: WallInput): Wall
	}

	schema {
		query: RootQuery
		mutation: RootMutation
	}
`)

export default schema
