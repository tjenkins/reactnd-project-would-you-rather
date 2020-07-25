export function withUserScore (user) {
  const answered = Object.keys(user.answers).length
  const asked = user.questions.length
  const score = answered + asked

  return ({
    ...user,
    answered,
    asked,
    score
  })
}