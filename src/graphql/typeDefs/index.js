import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Auth {
		id: ID!
		access_token: String!
		expiresIn: Int!
	}

	input LoginInput {
		phone: String!
		password: String!
	}

	type User {
		id: ID!
		first_name: String!
		last_name: String!
		photo: String
		cover: String
		sex: Int!
		type: Int!
		verified: Boolean
	}

	input UserInput {
		phone: String!
		email: String!
		password: String!
		first_name: String!
		last_name: String!
		sex: Int!
		type: Int!
	}

	type Page {
		id: ID!
		user_id: ID!
		name: String!
		about: String
		photo: String
		cover: String
		verified: Boolean
	}

	input PageInput {
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
		owner_id: ID
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

	type Photo {
		id: ID!
		owner_id: ID!
		photo: String!
		date: String!
	}

	type Query {
		userById(id: ID): User
		pageById(id: ID): Page
		wall(owner_id: ID): [Wall]
		audio(owner_id: ID): [Audio]
		photo(owner_id: ID): [Photo]
	}

	type Mutation {
		login(input: LoginInput): Auth
		signup(input: UserInput): Auth
		pageCreate(input: PageInput): Page
		wallPost(input: WallInput): Wall
	}
`

export default typeDefs