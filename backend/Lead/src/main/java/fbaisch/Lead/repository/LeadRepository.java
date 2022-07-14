package fbaisch.Lead.repository;

import fbaisch.Lead.entity.Lead;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeadRepository extends JpaRepository<Lead, Long> {

}
