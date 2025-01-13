using System.ComponentModel.DataAnnotations;

namespace Ecomerce.DTO.Contracts.User;

public record UserLoginDto([Required] string Email, [Required] string Password);