package fr.machut.service.mapper;

import fr.machut.domain.*;
import fr.machut.service.dto.EmployeeDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Employee and its DTO EmployeeDTO.
 */
@Mapper(componentModel = "spring", uses = {CompanyMapper.class, })
public interface EmployeeMapper extends EntityMapper <EmployeeDTO, Employee> {

    @Mapping(source = "company.id", target = "companyId")
    @Mapping(source = "company.name", target = "companyName")
    EmployeeDTO toDto(Employee employee); 

    @Mapping(source = "companyId", target = "company")
    Employee toEntity(EmployeeDTO employeeDTO); 
    default Employee fromId(Long id) {
        if (id == null) {
            return null;
        }
        Employee employee = new Employee();
        employee.setId(id);
        return employee;
    }
}
