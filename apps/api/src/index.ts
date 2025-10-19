import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const useCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

const useCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log(useCanInviteSomeoneElse)
console.log(userCanDeleteOtherUsers)
console.log(useCannotDeleteOtherUsers)
