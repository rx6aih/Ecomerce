using System.ComponentModel.DataAnnotations;

namespace Ecomerce.DTO.Contracts.User;

public record UserRegisterDto([Required]string UserName, [Required]string Email, [Required]string Password);